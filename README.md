# PancakeSwap

A clone of [PancakeSwap's front page ](https://pancakeswap.finance/) using HTML, SCSS and JS.

This is a pair programming exercise.

## Installation

1.Make sure you have yarn installed

`npm install --global yarn`

If you run `yarn --version` and it works it means that yarn was installed

2.Install dependencies

`yarn`

Pre-commit hooks:

- the commit messages need to follow the conventional commits structure (https://www.conventionalcommits.org/en/v1.0.0/)
- the files will need to be pretty before a commit. please run `yarn lint` before you commit otherwise you won't be able to commit

### Contributing

Follow the developer's branch structure.

Default theme is dark.

> Place:
>
> - Images to: assets/images
> - Js files to: assets/js
> - Scss files to: assets/styling

<br>

Media - Queries.

<br>

> Break - Points are:
>
> - XSmall: window width >=370px
> - Small: window width >=576px
> - Medium: window width >=852px
> - Large: window width >=968px
> - XLarge: window width >=1080px

<br>

Usage example for the break-point mixins in a basic SCSS code:

```
.main-content {
    padding: 0 1.5rem;

    // window width >=576px
    @include sm {
      padding: 0 2rem;
    }

    // window width >=852px
    @include md {
      margin-left: auto;
      margin-right: auto;
    }

    // window width >=968px
    @include lg {
      background: white;
    }
}
```

#### Live demo

[Press here](#) to see the result.
