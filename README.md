# vue-practice

## Project Introduction

`vue-practice` is a practice project based on Vue.js, aimed at helping developers familiarize themselves with the basic usage and best practices of Vue.js. This project includes multiple example pages covering Vue Router, Vuex, component-based development, and more. ahaha

## Project Structure

```
vue-practice/
├── README.md
├── package.json
├── vue.config.js                   # Vue CLI configuration file
├── src/        
│   ├── main.js                     # Entry file
│   ├── router.js                   # Router configuration
│   ├── components/                 # Common boxed components
│   │   └── element-ui-components/  # Boxed element-ui components
│   ├── store.js                    # Vuex state management
│   ├── styles/                     # Style files
│   │   ├── global.scss                 # Global styles
│   │   ├── index.scss                  # Entry styles
│   │   ├── mixins.scss                 # Style mixins
│   │   └── variables.scss              # Style variables
│   ├── views/                      # View components
│   │   ├── HomeContent.vue             # Home content
│   │   ├── login/                      # Login page
│   │   │   └── index.vue       
│   │   ├── userInfo/                   # User information page
│   │   │   └── InfoShow.vue
│   │   ├── test/                       # Test page
│   │   │   └── index.vue       
│   │   ├── table/                      # Table page
│   │   │   └── index.vue       
│   │   └── calendar/                   # Calendar page
│   │       └── index.vue       
│   └── resources/                  # Resource files
│       └── json/                       # JSON data
│           ├── calendarData.json           # Calendar data
│           └── tableData.json              # Table data
└── .eslintrc.js                     # ESLint configuration file
```

## Project Setup

### Install Dependencies

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run serve
```

### Compile and Minify for Production

```bash
npm run build
```

### Lint and Fix Files

```bash
npm run lint
```

## Custom Configuration

For more information on custom configuration, please refer to the [Configuration Reference](https://cli.vuejs.org/config/) page.

## Contribution

Contributions of any kind are welcome! Please submit issues or pull requests.

## License

This project is licensed under the MIT License.
