# Pesto

Pesto is a command-line tool to assist in creating Node.js packages. It provides vanilla JavaScript or TypeScript templates for your projects. You can choose either of them based on your preference.

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
