const e = React.createElement;

function LikeButton(){
    //Display Like Button
    return e(
        'button',{
           onclick: () => alert('berhasil')
        },
        'Like'
    );
}

//conts button=()=>{
    // return <button>Like</button>
//}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);