import React, { useState } from "react";

function RecipeCreate({ createRecipes }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipes(formData);
    setFormData({ ...initialFormState });
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <input
                id="content"
                name="name"
                className='form-control'
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Name..."
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="content"
                name="cuisine"
                className='form-control'
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Cuisine..."
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="content"
                name="photo"
                className='form-control'
                type="url"
                required={true}
                onChange={handleChange}
                placeholder="Image URL..."
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="content"
                name="ingredients"
                className='form-control'
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Ingredients..."
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="content"
                name="preparation"
                className='form-control'
                type="text"
                required={true}
                onChange={handleChange}
                placeholder="Preparation..."
                value={formData.preparation}
              />
            </td>
            <td>
              <button className="btn btn-primary" type="submit">Create <i class="uil uil-plus"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
