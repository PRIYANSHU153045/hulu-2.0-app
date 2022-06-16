import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";


function Results({ results }) {
    // let data = Array.from(results);
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            
            {
                // Object.keys(results).map(function (result) {
                //    return <Thumbnail key={result.id} result={result} />
                // }
                // /)
                results.map((result)=>(
                    <Thumbnail key={result.id} result={result} />
                )
                )
                    
                    
                
            }
        </FlipMove>
    );
}


export default Results

