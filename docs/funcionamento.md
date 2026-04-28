# Funcionamento do Vue 2

Cada arquivo é dividido em template, script e style.

O template vai lidar com a renderização declarativa, diretivas, router-links, chamadas de componentes, etc.

O script é organizado dentro de um export default, onde se define nome do componente, props, componentes utilizados, lifecycles hooks(como data()), métodos e etc.

## Template

### Renderização declarativa

Pode-se renderizar qualquer variável dentro do export default utilizando {{ }}.

### Diretivas

Ferramentas que podem ser utilizadas dentro de uma tag e iniciam com ```v-```, como o v-bind, v-model, v-if, v-for, etc.

### Router-links

Permitem que, ao clicar em algum elemento, seja mudada a rota atual, renderizando uma view conforme a configuração no arquivo de rotas.

Funciona junto de router-view:

```
<router-link to = "/">Home</router-link>

<router-view />
```

## Script

Com exceção dos imports, todo o código js deve ficar dentro do export default.

### Props

```
// FILHO
<script>
import CompOne from "@/CompOne.vue"
import CompTwo from "@/CompTwo.vue"

export default {
    name: "TestComponent",
    components: {
        CompOne,
        CompTwo
    },
    props: {
        username: "",
        email: "",
        password: ""
    },
};

// PAI

<template>
    <div>
        <TestComponent username = "antonioirfilho" email = "ant@gmail.com" password = "123" />
    </div>
</template>
</script>
```

// ENFATIZAR BEM AS DIREITVAS, O HOOK DATA, METHODS, A RELAÇÃO ENTRE OS DOIS POR MEIO DO THIS

// DESCREVER A DIFERENÇA DE TER E NÃO TER DOIS PONTOS ANTES DE UM ATRIBUTO DE TAG