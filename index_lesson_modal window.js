const modal = $.modal()

\modal.js\

function _creatModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('vmodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal title</span>
            <span class="modal-close">x</span>
          </div>
        <div class="modal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="modal-footer">
            <button>Ok</button>
            <button>Cancel</button>
        </div>
    </div>
  </div> 
`)
 document.body.appendChild(modal)
 return modal
}



$.modal = function(options) {
  const $modal = _creatModal(options)


return {
    open() {
        $modal.classList.add('open')
    },
    close() {
        $modal.classList.add('open')
    },
    destroy() {}
 }
}


\modal.css\
.vmodal {}

.vmodal.open .modal-overlay,
.vmodal.open .modal-window {
    opacity: 1;
    z-index: 1000;
}

.vmodal.open .modal-window {
    transform: translateY(100px);
}


.vmodal .modal-window {
    transform: translateY(100px);
}

.vmodal .modal-overlay {
    background: rgba(0, 0, 0, .5);
}  

.modal-window, .modal-overlay {
    opacity: 0;
    z-index: -1;
}



.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: background .2s ease-in;
    
}

.modal-window {
    width: 600px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto;
    transform: translateY(-200px);
    transition: transform .2s ease-in;
}

.modal-header {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
}

.modal-title {
    font-size: 1.5rem;
}

.modal-close {
    cursor: pointer;
}

.modal-body {
    padding: 10px;
}

.modal-body p {
    margin: 0 0 5px;
}

.modal-footer {
    padding: 5px 10px; 
    border-top: 1px solid #aaa;
}

\index.html\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/modal.css"> 
    <title>JS Практика</title>
</head>
<body>
    <div class="container"> 
     <h1>JS Практика</h1>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus nemo maxime numquam eos officiis sit voluptatem? Necessitatibus officiis, inventore porro et voluptate, nostrum beatae illo nihil soluta rem earum!</p>
    </div>


     
<script src="base.js"> </script>
<script src="plugins/modal.js"></script>
<script src="index.js"></script>

</body>
</html>
