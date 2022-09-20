<template>
    <div class="container">
        <h5>{{title}}</h5>
        <div class="card">
            <div class="card-body">
                <label for="nome">Nome</label>
                <input autocomplete="new-password" v-model="Nome" type="text" class="form-control"
                    placeholder="Nome do pet" required>
                <label for="idade">Idade</label>
                <input v-model="Idade" type="text" class="form-control" placeholder="Idade" required>
                <label for="tipo">Tipo</label>
                <select v-model="Tipo" class="form-control" required>
                    <option value="">Selecione</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                    <option value="Outros">Outros</option>
                </select>
                <div>
                </div>
                <label for="raca">Raça</label>
                <input v-model="Raca" type="text" class="form-control" placeholder="Raça" required>
                <h5 class="title">Dados do responsável</h5>
                <div class="card card-filho">
                    <div class="card-body">
                        <label class="label" for="nome">Nome</label>
                        <input autocomplete="new-password" v-model="NomeDono" type="text" class="form-control fc-child"
                            placeholder="Nome do dono" required>
                        <label class="label" for="telefone">Telefone</label>
                        <input v-model="Telefone" autocomplete="new-password" type="text" class="form-control fc-child"
                            placeholder="Telefone" required>
                        <label class="label" for="endereco">Endereço</label>
                        <input v-model="Endereco" type="text" class="form-control fc-child"
                            placeholder="Endereço completo" required>
                    </div>
                </div>
                <label for="nome">Observações</label>
                <input v-model="Observacao" type="text" class="form-control" required>
                <div class="input-group">
                    <button type="submit" class="btn" v-on:click="Cadastrar()" :disabled=disable>Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="aviso-pai">
        <div class="aviso" v-if="Trigger.timedTrigger">
            <p> {{ Aviso }} </p>
        </div>
    </div>

</template>

<script>
import CadastraPet from '@/service/CadastraPet';
import { ref } from 'vue';

export default {
    name: "FormularioCadastro",
    props: ["title"],
    data() {
        return {
            Nome: "",
            Idade: "",
            Tipo: "",
            Raca: "",
            Observacao: "",
            NomeDono: "",
            Endereco: "",
            Telefone: "",
            Aviso: "",
            Trigger: {},
            disable: 0
        }
    },
    methods: {
        Cadastrar() {
            {
                // verifica se o botão esta desabilitado, mas garantir que não será executado ao clicar na tecla enter
                if (this.disable === 0) {
                    if (this.Nome != "" && this.Tipo != "" && this.NomeDono != "" && this.Telefone != "" && this.Idade != "") {
                        this.disable = 1; 
                        const json = { Nome: this.Nome, Idade: this.Idade, Tipo: this.Tipo, Raca: this.Raca, Observacao: this.Observacao, NomeDono: this.NomeDono, Endereco: this.Endereco, Telefone: this.Telefone };
                        CadastraPet.cadastrar(json)
                        setTimeout(() => {
                            this.$router.push('/')
                        }, 500);
                    } else {
                        this.Aviso = "Os seguintes campos devem ser preenchidos: Nome, Idade, Tipo, Dono, Telefone"
                        this.Trigger.timedTrigger = true;
                        setTimeout(() => {
                            this.Trigger.timedTrigger = false;
                        }, 3000);
                    }
                }
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', event => {

            if (event.code === 'NumpadEnter' || event.code === 'Enter') {
                this.Cadastrar();
            }
        });
        this.Trigger = ref({
            timedTrigger: false
        });
    }
}

</script>

<style scoped>
.container {
    max-width: 600px;
}

.card {
    background-color: #42b883;
}

.card-body {
    text-align: left;
}

label {
    margin-bottom: 5px;
    padding-left: 5px;
    font-weight: bold;
    color: white;
}

.form-control {
    margin-bottom: 10px;
}

.title {
    padding-left: 5px;
    font-weight: bold;
    color: white;
}

.btn {
    font-weight: bold;
    color: white;
    background-color: #044231;
}

.btn:hover {
    background-color: #07684e;
    color: white;
}

h5 {
    font-weight: bold;
}

.card-filho {
    background-color: white;
}

.label {
    color: rgb(94, 90, 90);
}

.fc-child {
    border-color: #42b883;
}

.form-control:focus {
    border-color: #42b883;
    box-shadow: inset 0 1px 1px rgba(45, 104, 60), 0 0 8px rgba(45, 104, 60);
}

.aviso-pai {
    position: absolute;
    margin-top: 3px;
    bottom: 97vh;
    align-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    opacity: 1;
    animation: fade 4s linear;
}

.aviso {
    position: fixed;
    width: 350px;
    height: 70px;
    right: 3vw;
    border-radius: 2%;
    background-color: #e051187c;
    font-family: sans-serif;
    font-weight: bold;
}

@keyframes fade {
    0% {
        opacity: 0
    }

    5% {
        opacity: 1
    }

    60% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}
</style>