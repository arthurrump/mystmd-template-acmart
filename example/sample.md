---
title: The Name of the Title Is Hope
short_title: Hope
exports:
  - format: pdf+tex
    template: ..
    acm_format: sigconf
    conference_short_name: Woodstock '18
    conference_name: ACM Symposium on Neural Gaze Detection
    conference_date: June 03--05, 2018
    conference_venue: Woodstock, NY
    acm_doi: 10.1145/XXXXXXX.XXXXXXX
    acm_isbn: 978-1-4503-XXXX-X/2018/06
authors:
  - name: Ben Trovato
    email: trovato@corporation.com
    orcid: 0000-0002-1825-0097
    corresponding: true
    affiliations:
      - inst1
  - name: G.K.M. Tobin
    email: webmaster@marysville-ohio.com
    affiliations:
      - inst1
  - name: Lars Thørväld
    affiliations:
      - inst2
affiliations:
  - id: inst1
    name: Institute for Clarity in Documentation
    city: Dublin
    state: Ohio
    country: USA
  - id: inst2
    name: The Thørväld Group
    city: Hekla
    country: Iceland
keywords:
  - acmart
  - LaTeX
  - templates
bibliography:
  - sample-base
---

# Abstract

A clear and well-documented LaTeX document is presented as an article formatted for publication by ACM in a conference proceedings or journal publication. Based on the `acmart` document class, this article presents and explains many of the common variations, as well as many of the formatting elements an author may use in the preparation of the documentation of their work.

# Introduction

ACM's consolidated article template, introduced in 2017, provides a consistent LaTeX style for use across ACM publications, and incorporates accessibility and metadata-extraction functionality necessary for future Digital Library endeavors. Numerous ACM and SIG-specific LaTeX templates have been examined, and their unique features incorporated into this single new template [@Lamport:LaTeX].

## Template Styles

The primary parameter given to the `acmart` document class is the *template style* which corresponds to the kind of publication or SIG publishing the work. This parameter is enclosed in square brackets and is a part of the `documentclass` command:

```verbatim
  \documentclass[STYLE]{acmart}
```

Journals use one of several template styles. Most ACM journals use the `acmsmall` template style:

- `acmsmall`: The default journal template style.
- `acmlarge`: Large single-column format, used by DLT, DTRAP, HEALTH, IMWUT, JOCCH, TAP, and others.
- `acmtog`: Large double-column format, used by TOG.

## Tables

The template supports standard MyST table syntax. Table captions are placed
above the table, as is conventional in ACM publications. A simple table comparing
template styles is shown in {numref}`template-styles-table`.

```{list-table} ACM template styles
:header-rows: 1
:name: template-styles-table

* - Style
  - Type
  - Description
* - `manuscript`
  - Journal
  - Anonymous manuscript submission format
* - `acmsmall`
  - Journal
  - Default journal template style
* - `acmlarge`
  - Journal
  - Large single-column format (DLT, DTRAP, HEALTH, IMWUT, JOCCH, TAP)
* - `acmtog`
  - Journal
  - Large double-column format (TOG)
* - `sigconf`
  - Proceedings
  - Default conference proceedings format
```

## Figures

Figures are placed with a standard MyST image directive. {numref}`random-figure`
shows a randomly selected image sourced from the Lorem Picsum service.

```{figure} https://picsum.photos/600/300
:name: random-figure

A randomly selected image from Lorem Picsum, demonstrating figure support in
the ACM template.
```

## Equations

The template renders both inline and display mathematics via LaTeX. For example,
the Pythagorean theorem relates the sides of a right triangle:

$$a^2 + b^2 = c^2$$

More complex multi-line derivations are also supported. Consider the definition
of the Euler characteristic $\chi$ for a polyhedron with $V$ vertices, $E$
edges, and $F$ faces:

```{math}
:label: euler-characteristic
\chi = V - E + F
```

For surfaces homeomorphic to a sphere, $\chi = 2$. The Gaussian curvature $K$
relates to the Euler characteristic through the Gauss--Bonnet theorem:

```{math}
\int_M K \, dA = 2\pi \, \chi(M)
```

## Code Listings

Code blocks are rendered as monospaced listings with syntax highlighting.
{numref}`example-code` shows a Python implementation of the Euclidean algorithm
for computing greatest common divisors.

```{code-block} python
:linenos:
:name: example-code
:caption: Euclidean algorithm in Python.

def gcd(a: int, b: int) -> int:
    """
    Compute the greatest common divisor of a and b
    using the Euclidean algorithm.

    This is among the oldest known algorithms, dating
    back to Euclid's Elements (c. 300 BCE).
    """
    while b != 0:
        a, b = b, a % b
    return a
```

# Acknowledgements

To Robert, for the bagels and explaining CMYK and color spaces.
