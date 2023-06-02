import Feed from '../components/Feed';
function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover and share
      <br/>
      <span className="orange_gradient text_center"> Ai Centered </span>

      </h1>   
      
      <p className="desc text-center">
        Hello how are you?
      </p>
      <Feed/>
    </section>
  );
}

export default Home;
