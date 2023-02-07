import './App.css';
import Comentario from './components/Comment.js'

//renderizado del componente Comentario
// tambien generamos el componente Comentario
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Comentarios sobre ChatGpt</h1>
        <Comentario 
          nombre='Bill Gates'
          pais='EEUU'
          imagen='bill'
          cargo='Dueño'
          empresa='Microsoft'
          comentario='Es tan importante como el PC o Internet Ya durante su sesión de preguntas y respuestas de Reddit nos dio pistas sobre su entusiasmo por la inteligencia artificial asegurando que ChatGPT "es solamente un pequeño vistazo de todo lo que está por llegar". Gates se sorprendía sobre todo por el enfoque dado y su ritmo de innovación.'
        />

          <Comentario 
          nombre='Mark Zuckerberg'
          pais='EEUU'
          imagen='mark'
          cargo='Dueño'
          empresa='Facebook'
          comentario='Zuckerberg, eso sí, subraya que Meta continuará trabajando en la IA de recomendación, así como en el metaverso, donde han invertido millones de dólares y cuya división —Reality Labs— continúa perdiendo ingresos. De hecho, destaca que la inteligencia artificial, incluyendo su “motor de descubrimiento, anuncios, mensajería de negocios, y cada vez más IA generativa”, así como el metaverso, son dos áreas de prioridad en Meta.'
        />
        
         <Comentario 
          nombre='Larry Page'
          pais='EEUU'
          imagen='larry'
          cargo='Dueño'
          empresa='Google'
          comentario='ChatGPT amenaza el reinado de Google, que ha decido ponerse el mono de trabajo ante la irrupción del chatbot de inteligencia artificial (IA) de OpenAI. Hacía meses que no se veían a los fundadores de la compañía con sede Mountain View por las oficinas. Pero esa estampa se ha vuelto a repetir. Larry Page y Sergey Brin se han encargado personalmente de revisar la estrategia de productos de inteligencia artificial.'
        />
      </div>
    </div>
  );
}

export default App; // export default es para exportar este unico componente que se exporta
 //exportar con exportacion nombrada