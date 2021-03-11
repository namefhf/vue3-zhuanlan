import { onUnmounted } from 'vue'
export default function(id) {
  const node = document.createElement('div')
  node.id = id
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}
