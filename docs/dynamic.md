# dynamic component

::: v-pre
<div class='mermaid'>
 graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
</div>
::: 

<script>
    export default {
        mounted() {
            import('https://cdn.skypack.dev/mermaid').then((module) => {
                module.default.initialize({
                    startOnLoad: true
                })
            });
        }
    }
</script>