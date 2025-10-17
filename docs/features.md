# Features do Vue

## Composition API

- Forma do Vue3 de simplificar o processo de importação das funções dentro do script

```
<script setup>
import { ref } from 'vue'
const contador = ref(0) // equivalente ao data(), variável reativa conforme interação do usuário no template 
function contar() { // funções que antes eram agrupadas em methods
    contador.value++; 
}
</script>
```

## RouterLink e RouterView

- Frameworks Single Page Application (SPA) trabalham com redirecionamento dinâmico

- O Vue utiliza o RouterLink para direcionamento e RouterView para renderizar o componente que está sendo chamado pela URL

- A estrutura de configuração de uma rota para um component page (view) funciona da seguinte forma:

```
>> Lista de dicionários
>> Cada dicionário é uma rota para um componente

import ComponenteView from '../views/ComponenteView.vue'

routes = [
    {
        path: '/componente-page',
        name: 'Componente',
        component: ComponenteView
    }
]
```

## Atributos de tag

- @submit.prevent -> realiza o submit de um form já com o preventDefault, chamando na atribuição a função que deve lidar com o submit

- v-model -> realiza o two way data binding, ou seja, o valor que vai sendo atribuido no input é atualizado simultanemente na ref

- @click -> equivalente ao on-click, chama uma função ao detectar click na tag

## Propriedades

### ref x reactive

- ref -> mais simples, pode ser utilizado para tipos primitivos e objetos

- reactive -> mais complexo, melhor para arrays e objetos

```
>> ref
const contagem = ref(0);
const texto = ref('');
const estado = ref(false);
>> reactive
const user = [
    {email: 'joao123@gmail.com', senha: '12345'}
]
```


**ESTUDAR FEATURES COMO props, mount, etc**

**ESTUDAR COMO FAZER REQUISIÇÕES À API**