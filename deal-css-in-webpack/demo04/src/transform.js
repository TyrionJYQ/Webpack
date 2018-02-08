module.exports = function(css) {
  console.log(css)
  console.log(window.innerWidth)
  
  if (window.innerWidth < 476) {
    return  css.replace('24', '12')
  } 
  return css
}