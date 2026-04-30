# Funcionamento do Vue 2

Cada arquivo é dividido em template, script e style.

O template vai lidar com a renderização declarativa, diretivas, router-links, chamadas de componentes, etc.

O script é organizado dentro de um export default, onde se define nome do componente, props, componentes utilizados, lifecycles hooks(como data()), métodos e etc.

## Template

### Renderização declarativa

Pode-se renderizar qualquer variável dentro do export default utilizando {{ }}.

### Diretivas

Ferramentas que podem ser utilizadas dentro de uma tag e iniciam com ```v-```, como o v-bind, v-model, v-if, v-for, etc.

- **v-bind**: Passa para a tag, em formato de string, o valor de uma variável do data, e pode ser simplificado por dois pontos:

```
<template>
    <div>
        <img v-bind:src="imageUrl" /> ou <img :src="imageUrl" /> // VALOR DA VARIÁVEL
        <img src="imageUrl" /> // STRING imageUrl
    </div>
</template>
```

- **v-model**: Two way data binding, o valor de um input passa para a variável e vice-versa dinamicamente:

```
<template>
    <div>
        <input type="text" v-model="username" />
    </div>
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return {
            username: ""
        }
    },
}
</script>
```

- **v-on**: Captura de eventos como click, submit e input, podendo ser simplicado por @:

```
<template>
    <div>
        <button @click="clickButton">Mostrar form</button>
        <form v-show="button" v-on:submit.prevent="sendData"> ou <form @submit.prevent="sendData">
            <input type="text" @input="setUsername" />
            <input type="text" @input="setEmail" />
            <input type="password" @input="setPassword" />
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return {
            button: false,
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        clickButton() {
            if (this.button) {
                this.button = false
            } else {
                this.button = true
            }
        },
        setUsername(event) {
            this.username = event.target.value
        },
        setEmail(event) {
            this.email = event.target.value
        },
        setPassword(event) {
            this.password = event.target.value
        }
    }

}
</script>
```

- **v-if, v-for, v-show**: Diretivas condicionais e iterativas:

```
// IF para condições que variam menos, SHOW para mudar o estado do display constantemente (como no exemplo do v-on, que ao clicar no botão o estado muda)
<template>
    <div>
        <h1 v-if="logado">Bem-vindo</h1>
        <h1 v-else-if="carregando">Carregando...</h1>
        <h1 v-else>Entre no sistema</h1>
    </div>
</template>

// FOR deve possuir key única para cada item
<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.username }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return {
            users: []
        }
    },
}
</script>
```

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

### Data

Hook que armazena dados que podem ser manipulados pelo template e pelos métodos.

```
<template>
    <div>
        <p>{{ username }}</p>
    </div> 
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
}
</script>
```

### Métodos

Os métodos podem acessar os dados do hook data e podem ser chamados livremente no template.

Para acessar e modificar os dados do data basta utilizar o operador ```this```:

```
<template>
    <div>
        <form>
            // atualizando a data diretamente
            <input type="text" v-model="username" />
            <input type="text" v-model="email" />
            <input type="text" v-model="password" />
            // passando pelo método
            <input type="text" @input="setUsername" />
            <input type="text" @input="setEmail" />
            <input type="text" @input="setPassword" />
        </form>
    </div>
</template>

<script>
export default {
    name: "TestComponent",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        setUsername(event) {
            this.username = event.target.value
        },
        setEmail(event) {
            this.email = event.target.value
        },
        setPassword(event) {
            this.password = event.target.value
        }
    },
}
</script>
```

## Requisições para API

As requisições podem ser feitas com fetch tradicional ou axios.

O axios já seta o Content-Type e faz o JSON.Stringify automaticamente(```npm install axios```).

O hook mounted coonfigura para chamar o método de requisição assim que o componente for aberto (no caso do GET, por exemplo).

```
<script>
export default {
    name: "TestComponent",
    data() {
        return {
            users: [],
            user: {
                username: "",
                email: "",
                password: ""
            }
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        async getUsers() {
            try {
                // FETCH NORMAL - GET
                const response = await fetch("http://localhost:3000/api/users")
                this.users = await response.json()
                // AXIOS
                const response = await axios.get("http://localhost:3000/api/users")
                this.users = response.data
            } catch (error) {
                console.error(error)
            }
        },

        async postUser() {
            try {
               // FETCH NORMAL - POST
                const response = await fetch("http://localhost:3000/api/users", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                })
                const response = await response.json()
                // AXIOS
                const response = await axios.post("http://localhost:3000/api/users", this.user)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>
```

## Autenticação

Ao receber o token na resposta da autenticação, ele deve ser adicionado ao Local Storage, junto dos dados do usuário(para que sejam utilizados).

Para fazer as requisições, o token deve ser adicionado ao header de authorization.

Pelo axios, o ideal é criar um objeto api com a URL base e o token vindo do Local Storage, para simplificar as requisições.

Ao realizar logout, o Local Storage deve ser limpo.

```
// api.js

import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = token
    }
    return config
})

export default api
```

```
<script>
import api from "../services/api.js"

export default {
    name: "TestComponent",
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        async login() {
            try {
                const response = api.post("/login", this.user)
                localStorage.setItem("token", response.headers["authorization"])
                localStorage.setItem("user", JSON.stringify(response.data))
            } catch (error) {
                console.error(error)
            }
        }

        logout() {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            this.$router.push("/login") # redireciona automaticamente para a rota de login
        }
    }
}
</script>
```

### Proteção das rotas

No Vue Router, as rotas protegidas devem possuir ```meta requerAuth```, seguido de um navigation guard que roda antes de toda mudança de rota verificando se a rota é protegida e se o token está presente para permitir seguir:

```
// router/index.js

const routes = [
    { path: "/home", component: HomeView, meta: {requerAuth: true} },
]

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("token")
    if (to.meta.requerAuth && !token) {
        next("/login")
    } else {
        next()
    }
})

```