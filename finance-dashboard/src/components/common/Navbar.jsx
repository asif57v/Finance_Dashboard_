    import { useContext } from "react";
    import { AppContext } from "../../context/AppContext";

    export default function Navbar() {
    const { role, setRole } = useContext(AppContext);

    return (
        <div className="flex justify-end mb-4">
        <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
        </select>
        </div>
    );
    }