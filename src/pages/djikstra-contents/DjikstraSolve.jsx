import { useState, useEffect } from "react";
import DjikstraHeader from '../djikstra-contents/DjikstraHeader'

import {GenerateMatrix} from './utils/helper.js';

import GraphStartParameter from './components/GraphStartParameter'
import GraphNodeCounter from './components/GraphNodeCounter'
import GraphEdgeDisplay from "./components/GraphEdgeInput";
import GraphZeroParameter from "./components/GraphZeroParemeter";
import GraphMaxValueParameter from "./components/GraphMaxValueParameter.jsx";
import GraphUnsafeBoxes from "./components/GraphUnsafeBoxes.jsx";
import GenerateGraph from "./utils/GraphGenerator.jsx";

import DjikstraAll from './utils/djikstra.js'
import GraphDjikstraOutput from "./components/GraphDjikstraOutput.jsx";

function DjikstraSolve() {
  const NodeMin = 2;
  const NodeInit = 3;
  const NodeMax = 20;

  const [ StartNode, SetStartNode ] = useState(1);
  const [ RNGValMax, SetRNGValMax] = useState(10);
  const [ ZeroProbability, SetZeroProbability ] = useState(10);
  const [ NodeCount, SetNodeCount ] = useState(NodeInit);
  const [ CycleBool, SetCycleBool ] = useState(false);
  const [ RNGValMin, SetRNGMinValue ] = useState(0);
  const [ Graph, SetGraph ] = useState(GenerateMatrix(NodeInit, RNGValMin, RNGValMax, ZeroProbability, CycleBool))
  const [ ResultGraph, SetResultGraph ] = useState([]);

  // Callback Function when Changes Happen
  useEffect(() => {
    SetGraph(GenerateMatrix(NodeCount, RNGValMin, RNGValMax, ZeroProbability, CycleBool));
    SetResultGraph([]);
    SetStartNode(1);
  }, [NodeCount, CycleBool, RNGValMax, ZeroProbability, RNGValMin]);

  function CalculateDjikstra() {
    SetResultGraph(DjikstraAll(Graph, StartNode-1));
  }

  return(
    <>
      <DjikstraHeader/>
      <div className='flex flex-col h-full w-full bg-neutral-900 justify-start items-center align-middle'>

        <div className="flex flex-col h-auto mb-10 w-screen self-center text-center align-middle justify-center items-center">
          <GenerateGraph matrix={Graph}></GenerateGraph>
        </div>

          <div className='flex flex-row border-2 rounded-4xl border-emerald-600 bg-emerald-950 p-5'>
            <div className="flex flex-col">
              <p className='text-4xl text-emerald-300 font-extrabold text-center'>Graph Parameters</p>
              <div className='flex flex-row w-fit p-5 justify-center align-bottom items-center'>
                <GraphStartParameter StartNode={StartNode} SetStartNode={SetStartNode} EndNode={NodeCount}/>
                <GraphZeroParameter ZeroProbability={ZeroProbability} SetZeroProbability={SetZeroProbability}/>
                <GraphNodeCounter NodeCount={NodeCount} SetNodeCount={SetNodeCount} NodeMax={NodeMax} NodeMin={NodeMin}/>
                <GraphMaxValueParameter MaxValue={RNGValMax} SetMaxValue={SetRNGValMax}/>
              </div>
              <button className='appearance-none self-center w-100 bg-emerald-600 border-2 border-emerald-200 p-5 ease-(--my-beizer) hover:scale-110 duration-200 hover:bg-emerald-800 rounded-4xl font-extrabold text-4xl' onClick={() => {CalculateDjikstra()}}>Solve</button>
            </div>
            <div>
              <GraphUnsafeBoxes SetCycleBool={SetCycleBool} RNGValMax={RNGValMax} SetRNGMinValue={SetRNGMinValue}/>
            </div>
          </div>

            {ResultGraph && Object.keys(ResultGraph.path_info || {}).length > 0 && (
              <div className='w-full'>
                <div className="flex flex-row flex-wrap border-2 border-blue-500 bg-blue-950 w-auto m-5 rounded-4xl">
                  <GraphDjikstraOutput data={ResultGraph}></GraphDjikstraOutput>
                </div>
                  
              </div>
            )}

          {/* EACH INPUT NODE */}
          <div className="flex flex-row justify-around flex-wrap border-2 border-neutral-800 w-fit m-5 rounded-4xl">
            <GraphEdgeDisplay Graph={Graph}></GraphEdgeDisplay>
          </div>


        </div>
    </>
  );
}

export default DjikstraSolve;