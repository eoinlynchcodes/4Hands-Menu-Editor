import React, { useState } from 'react';
import axios from 'axios';
import '../css/Form.css';

function AddMenu(){ 

    const [ formData, setFormData ] = useState();

    return(
    <div>
        <form>
            <label>Menu
            <input
            />
            </label>
        </form>

    </div>
    );
}

export default AddMenu;