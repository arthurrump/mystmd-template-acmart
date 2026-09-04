# MyST acmart plugins

- `acmart-figure-description`
  
  Adds a `\\Description` command with the alt-text of the image in a figure, following the [ACM accessibility guideline for describing figures](https://authors.acm.org/proceedings/production-information/describing-figures). If no alt-text is given, it copies the caption here, due to preprocessing in MyST that sets the alt-text to the caption if no alt-text is set. Only use this plugin if you plan to add alt-text to figures!

  ```mystmd
  :::{figure} path/to/the/figure.pdf
  :label: fig:a-figure
  :alt: This is the alt-text that will be written into \Description.

  This is the caption for the figure.
  :::
  ```
