// This plugin inserts a \Description command with the contents of the alt
// option on a figure container. Since transforms seem to run on the POST AST,
// we need to recover the alt text from the contained image. Figures with
// multiple images are interpreted as subfigures, each with their own figure
// container, so we only handle figures where the first child is an image.

const plugin = {
    name: 'acmart figure descriptions for accessibility, based on alt-text',
    transforms: [{
        name: 'acmart-figure-description',
        stage: 'project',
        plugin: (_, utils) => (node) => {
            utils.selectAll('container[kind=figure]', node)?.forEach(figure => {
                const firstChild = figure.children?.[0];
                if (firstChild?.type === 'image' && firstChild.alt) {
                    figure.children?.push({
                        type: 'raw',
                        lang: 'tex',
                        tex: `\n\\Description{${figure.children?.[0]?.alt}}`
                    });
                }
            });
        }
    }]
}

export default plugin;
