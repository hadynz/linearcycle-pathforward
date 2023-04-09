import { ChangeEvent, useCallback } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export type TextUpdaterNodeData = {
  title: string;
  description: string;
};

function TextUpdaterNode({ data }: NodeProps<TextUpdaterNodeData>) {
  console.log('data', data);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle position={Position.Top} type="target" />
      <div>
        <label htmlFor="text">Text:</label>
        <input
          className="nodrag"
          id="text"
          name="text"
          onChange={onChange}
          placeholder={data.title}
        />
      </div>
      <Handle id="a" position={Position.Bottom} type="source" />
    </>
  );
}

export default TextUpdaterNode;
