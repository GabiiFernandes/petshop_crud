<!-- componente usado para visualização e edição dos animais -->

<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md">
                    <label for="nome">Nome</label>
                    <input v-model="Nome" type="text" class="form-control" name="nome" placeholder="Nome do pet"
                        :disabled=disable required>
                </div>
                <div class="col-md">
                    <label for="nome">Idade</label>
                    <input v-model="Idade" type="text" class="form-control" name="idade" placeholder="Idade"
                        :disabled=disable required>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <label for="nome">Tipo</label>
                    <select v-model="Tipo" class="form-control" name="tipo" :disabled=disable required>
                        <option value="">Selecione</option>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div class="col-md">
                    <label for="nome">Raca</label>
                    <input v-model="Raca" type="text" class="form-control" name="raca" placeholder="Raça"
                        :disabled=disable required>
                </div>
            </div>
            <h5 class="title">Dados do responsável</h5>
            <div class="card card-filho">
                <div class="card-body">
                    <label class="label" for="nome">Nome</label>
                    <input v-model="NomeDono" type="text" class="form-control fc-child" name="dono"
                        placeholder="Nome do dono" :disabled=disable required>
                    <label class="label" for="nome">Telefone</label>
                    <input v-model="Telefone" type="text" class="form-control fc-child" name="telefone"
                        placeholder="Telefone" :disabled=disable required>
                    <label class="label" for="nome">Endereço</label>
                    <input v-model="Endereco" :disabled=disable type="text" class="form-control fc-child"
                        name="endereco" placeholder="Endereço completo" required>
                </div>
            </div>
            <label for="nome">Observações</label>
            <input v-model="Observacao" type="text" class="form-control" name="obs" :disabled=disable required>
            <div class="input-group">
                <button class="btn" v-on:click="AlterarFechar()">{{ ButtonName }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import Pet from '@/service/RetornaPet'
export default {
    name: "EditarVue",
    props: ["id", "mode", "disable"],
    data() {
        return {
            pet: {},
            Nome: "",
            Idade: "",
            Tipo: "",
            Raca: "",
            Observacao: "",
            NomeDono: "",
            Endereco: "",
            Telefone: 0,
            ButtonName: ""
        };
    },

    methods: {
        AlterarFechar() {
            if (this.mode == 'Alterar') {
                const json = { id: this.$route.params.id, Nome: this.Nome, Idade: this.Idade, Tipo: this.Tipo, Raca: this.Raca, Observacao: this.Observacao, NomeDono: this.NomeDono, Endereco: this.Endereco, Telefone: this.Telefone };
                this.$emit("alterar", json);
            } else {
                this.$emit("fecha");
            }
        },
        CarregaInput() {
            this.Nome = this.pet[0].Nome
            this.Idade = this.pet[0].Idade
            this.Tipo = this.pet[0].Tipo
            this.Raca = this.pet[0].Raca
            this.Observacao = this.pet[0].Observacao
            this.NomeDono = this.pet[0].NomeDono
            this.Endereco = this.pet[0].Endereco
            this.Telefone = this.pet[0].Telefone
        },
        Listar(id) {
            Pet.listar(id)
                .then(response => {
                    this.pet = Object.assign({}, response.data.pet);
                    this.CarregaInput();
                });
        }
    },
    mounted() {
        if (this.mode === 'Alterar') {
            this.Listar(this.$route.params.id);
            this.ButtonName = "Alterar";

            window.addEventListener('keydown', event => {
                if (event.code === 'NumpadEnter' || event.code === 'Enter') {
                    this.AlterarFechar();
                }
            });
        } else {
            this.Listar(this.id);
            this.ButtonName = "Voltar"
        }
    }
}
</script>

<style scoped>
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
</style>
