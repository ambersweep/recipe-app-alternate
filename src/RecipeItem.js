import React from "react";

export default function RecipeItem({
  name,
  cuisine,
  photo,
  ingredients,
  preparation,
  deleteRecipe,
}) {
  return (
    <tr>
      <td className="content_td">
        <p className="largerFont">{name}</p>
      </td>
      <td className="content_td">
        <p className="largerFont">{cuisine}</p>
      </td>
      <td className="content-td">
        <img className="scale-down" src={photo} />
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button className="button-delete" name="delete" type="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}
