<template>
<section class="section ">
                        <div class="tabs is-centered is-boxed is-medium">
                            <ul>
                                <li class="is-active">
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                                        <span>Pictures</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                                        <span>Music</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
                                        <span>Videos</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                                        <span>Documents</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <section class="hero is-dark">
                            <div class="hero-body">
                                <div class="container">
                                    <h1 class="title">
                                        Primary title
                                    </h1>
                                    <h2 class="subtitle">
                                        Primary subtitle
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <br>

                        <div class="columns">
                            <div class="column is-4">
                                <div class="card ">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Save</a>
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item">Delete</a>
                                    </footer>
                                </div>
                            </div>
                            <div class="column is-4">
                                <div class="card ">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Save</a>
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item">Delete</a>
                                    </footer>
                                </div>
                            </div>

                            <div class="column is-4">
                                <div class="card ">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Save</a>
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item">Delete</a>
                                    </footer>
                                </div>
                            </div>
                            <div class="column is-4">
                                <div class="card ">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Save</a>
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item">Delete</a>
                                    </footer>
                                </div>
                            </div>
                        </div>


                    </section>
</template>

<script>
export default {
  name: "Table",
  props: {
    node: Object,
    ruta: String
  },
  components: {
    
  }
};
</script>