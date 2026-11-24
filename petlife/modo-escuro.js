/* ==========================================
   MODO ESCURO - PetLife
   Coloque este script no <head> das páginas, depois dos CSS.
   ========================================== */

// 1. Assim que a página começa a carregar, aplica o modo escuro se ele estiver salvo
//    (fica no <html> para a página não "piscar" branca antes de escurecer)
if (localStorage.getItem("modoEscuro") === "sim") {
  document.documentElement.classList.add("modo-escuro");
}

// 2. Liga o interruptor "Modo Escuro (Beta)" da página de perfil
document.addEventListener("DOMContentLoaded", function () {
  const interruptor = document.getElementById("interruptor-modo-escuro");
  if (!interruptor) return; // páginas sem o interruptor só aplicam o modo salvo

  interruptor.checked = document.documentElement.classList.contains("modo-escuro");

  interruptor.addEventListener("change", function () {
    document.documentElement.classList.toggle("modo-escuro", interruptor.checked);
    localStorage.setItem("modoEscuro", interruptor.checked ? "sim" : "nao");
  });
});
