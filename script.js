function openLightbox(src){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lb.classList.add('active');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('active');
}
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeLightbox();
});
