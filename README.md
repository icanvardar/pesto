# Pesto 🔪🌿 [![NPM][npm-badge]][npm] [![License: MIT][license-badge]][license]

Pesto is a command-line tool to assist in creating Node.js packages. It provides vanilla JavaScript or TypeScript templates for your projects. You can choose either of them based on your preference.

[license]: https://opensource.org/licenses/MIT
[license-badge]: https://camo.githubusercontent.com/92ef5e7ebc8632fef4862d243dda949198df87928b72df01444fc213163a7e53/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765
[npm]: https://www.npmjs.com/package/make-pesto
[npm-badge]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white

## Usage

To run Pesto, simply use the following command:

```
npx make-pesto <project-name> [--template <template>] [-v]
```

### Flags

-   `--template` or `-t`: Specify the template to use. Available options are `basic` and `typescript`.
-   `--verbose` or `-v`: Enable verbose mode.

### Example

```
npx make-pesto project-name --template typescript -v
```

## Features

-   **Easy Setup**: Pesto simplifies the process of setting up a Node.js package.
-   **Template Options**: Choose between vanilla JavaScript and TypeScript templates.
-   **Husky Integration**: Husky is integrated for pre-commit hooks to ensure code quality.
-   **Linting and Formatting**: ESLint and Prettier are included for consistent code style.

## Getting Started

1. Install Pesto globally:

```
npm install -g make-pesto
```

2. Run Pesto with your desired project name and template.

3. Start coding!

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on [GitHub](https://github.com/icanvardar/pesto).

## License

This project is licensed under the MIT License.
