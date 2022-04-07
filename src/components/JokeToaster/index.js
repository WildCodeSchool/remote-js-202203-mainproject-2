import { useEffect, useState } from 'react';
import '../../assets/styles/jokeToaster.css';
import { getSafeJoke } from './getJoke';

function JokeToaster() {

    const [ joke, setJoke ] = useState('');
    const [ isVisible, setIsVisible ] = useState(true);
    const [ toasterInterval, setToasterInterval ] = useState(false);
    
    // TODO obtenir les préférences de l'utilisateur
    useEffect(async () => {
        await loadJoke();
        resetInterval();
    }, []);


    async function loadJoke(){
        let joke = await getSafeJoke();
        setJoke(joke);
    }

    function resetInterval(){
        if(toasterInterval) clearTimeout(toasterInterval);
        setToasterInterval(setTimeout(() => {
            setIsVisible(false);
        }, 3000));
    }

    function parseLineBreak(string){
        return string.split('\n').map((p, i) => <p key={i} className='joke-part'>{p}</p>);
    }

    function showJoke(){
        if(joke.type === 'single') return(<div><blockquote className='single-joke'>{parseLineBreak(joke.joke)}</blockquote></div>);

        if(joke.type === 'twopart'){
            return(
                <div className='joke-container'>
                    <blockquote className='twopart-joke-setup'>{parseLineBreak(joke.setup)}</blockquote>
                    <blockquote className='twopart-joke-delivery'>{parseLineBreak(joke.delivery)}</blockquote>
                </div>
            );
        }
    }

    function closeToasterBtnClicked(e){ e.preventDefault(); setIsVisible(false);}

    async function reloadToasterBtnClicked(e){ 
        e.preventDefault();
        await loadJoke();
    }

    function mouseEnterToaster (){
        clearTimeout(toasterInterval);
    }

    return ( 
        <section className={`joke-toaster ${isVisible ? 'show' : 'hide'}`} onMouseEnter={mouseEnterToaster} onTouchStart={mouseEnterToaster}>
            <div> { joke && showJoke() }</div>
            <div className='toaster-btn-div'>
                <button className='close-toaster-btn' onClick={closeToasterBtnClicked}>❌</button>
                <button className='reload-toaster-btn' onClick={reloadToasterBtnClicked}>🔄</button>
            </div>
        </section>
    );
}

export default JokeToaster;