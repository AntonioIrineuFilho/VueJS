# Introdução ao Vue

- Framework de JavaScript baseado em componentes

- Simplifica o processo de manipulação e transferência dos dados e das tags HTML

## Projeto

- O projeto pode ser criado de uma forma mais simples e sem build, com o arquivo HTML junto ao script VUE

- A outra forma é a construção de um projeto robusto, com build tool e arquivos .vue com cada componente e um arquivo main.js que é chamado no .html

### Estrutura 

```
meu-projeto/
├── index.html
├── src/
│   ├── main.js
│   ├── App.vue
│   └── components/
│       └── Component-1.vue
├── package.json
```

### index.html

- A página HTML que vai apenas importar o main.js

- Não terá conteúdo, apenas uma div com o identificador para ser preenchida pelo App.vue

```
<div id="app"></div>
<script type="module" src="/src/main.js"></script>
```

### main.js

- Atuará como uma ligação do App.vue ao index.html

```
import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")
```

### App.vue

- Arquivo que unirá todos os componentes e criará o conteúdo completo da página (html, css e js)

```
<template>
    <div><
        <Component /> // chama o component
    /div>
</template>

<script>
import Component from "./components/Component-1.vue"

export default {
    name: "App",
    components: {
        Component // importa o componente
    }
}
</script>
```

### Component-1.vue

```
<template></template>
<script></script>
``` 