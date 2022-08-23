import { Counter } from "./Counter"
export function Msg({name, pic}) {
      return (
      <div>
        <h1>Hello {name}</h1>
        <img className="profile-pic" src={pic} alt={name} />
        <Counter />
      </div>
    );
  }
  