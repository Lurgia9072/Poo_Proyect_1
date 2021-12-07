class Product{
    constructor(name, price ,yaer){
        this.name = name;
        this.price = price;
        this.yaer = yaer;
 }
}

class UI{
    addProduct(product){

        const ProductList=document.getElementById('product-list')
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong> Product name</strong> :${product.name}
                <strong> Product  price</strong> :${product.price}
                <strong> Product year </strong> :${product.yaer}
                <a class="btn btn-danger " name="delete">Delete</a>
            </div>
        </div>        
        `
        
        ProductList.appendChild(element)
    }

    resetForm(){
        document.getElementById('product-form').reset()
    }
    deleteProduct(element){

        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product delete successfully', 'info')
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div')
        div.className=` alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(message))
        
        const container=document.querySelector('.container')
        const app=document.querySelector('#App')
        container.insertBefore(div, app)

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
    }
}

const form = document.getElementById('product-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
  const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const yaer = document.getElementById('year').value

    const product = new Product(name, price, yaer)

    const ui = new UI();
//cuando faltan datos

    if(name==='' || price===''|| yaer===''){
      return  ui.showMessage(' fill in the empty spaces', 'danger')
    }



    ui.addProduct(product)
    ui.resetForm();
    ui.showMessage('Product added successfully', 'success')
    console.log(name, price, yaer)
   
})

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target)
})