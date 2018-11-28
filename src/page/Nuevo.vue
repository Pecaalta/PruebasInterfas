<template>
    <div>
        <h1 class="title">Nuevo</h1>
        <div>
            <ul class="steps has-gaps is-horizontal">
                <li class="steps-segment is-active">
                    <span class="steps-marker"></span>
                    <div class="steps-content is-divider-content"></div>
                </li>
                <li class="steps-segment">
                    <span class="steps-marker"></span>
                    <div class="steps-content is-divider-content"></div>
                </li>
                <li class="steps-segment">
                    <span class="steps-marker"></span>
                    <div class="steps-content is-divider-content"></div>
                </li>
                <li class="steps-segment">
                    <span class="steps-marker"></span>
                    <div class="steps-content is-divider-content"></div>
                </li>
                <li class="steps-segment">
                    <span class="steps-marker"></span>
                    <div class="steps-content is-divider-content"></div>
                </li>
            </ul>
        </div>
        <br>
        <div>
            <div class="steps-conteiner">
                <div class="columns">
                <!-- Ckeceop contenido-->
                <div class="column">
                    <div onchange="Check(this)" class="control has-icons-left has-icons-right ">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right ">
                        <i class="fas fa-exclamation hidden"></i>
                        <i class="fas fa-check hidden"></i>
                    </span>
                    </div>
                </div>
                <div class="column">
                    <input class="input" type="tags" placeholder="Add Tag" >
                </div>
                </div>
                <footer >
                <a onclick="FromPage(this,0)" class="button " style="float: left">Cancelar</a>
                <a onclick="FromPage(this,+1)" class="button is-primary" style="float: right;">Siguiente</a>
                </footer>

            </div>
            <div class="steps-conteiner">
                <div class="columns">
                <div class="column">
                    <div class="file is-centered is-boxed is-success has-name" >
                    <label class="file-label">
                        <input onchange="upload(this)" data-viewname="uploadName" class="file-input" type="file" name="resume">
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Right file…
                        </span>
                        </span>
                        <span id="uploadName" class="file-name">
                        File name
                        </span>
                    </label>
                    </div>
                </div>
                </div>
                <footer >
                <a onclick="FromPage(this,-1)" class="button " style="float: left">Cancelar</a>
                <a onclick="FromPage(this,+1)" class="button is-primary" style="float: right;">Siguiente</a>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Nuevo",
  props: {
  },
}
</script>