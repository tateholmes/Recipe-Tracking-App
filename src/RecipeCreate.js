import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
	const initialFormState = {
		name: "",
		cusisine: "",
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
		createRecipe(formData);
		setFormData({ ...initialFormState });
	};

	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preparation</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input
								id="name"
								name="name"
								type="text"
								placeholder="Name"
								required
								onChange={handleChange}
								value={formData.name}
							/>
						</td>
						<td>
							<input
								id="cuisine"
								name="cuisine"
								type="text"
								placeholder="Cuisine"
								required
								onChange={handleChange}
								value={formData.cuisine}
							/>
						</td>
						<td>
							<input
								id="photo"
								name="photo"
								type="url"
								placeholder="URL"
								required
								onChange={handleChange}
								value={formData.photo}
							/>
						</td>
						<td>
							<textarea
								id="ingredients"
								name="ingredients"
								placeholder="Ingredients"
								rows={2}
								required
								onChange={handleChange}
								value={formData.ingredients}
							/>
						</td>
						<td>
							<textarea
								id="preparation"
								name="preparation"
								placeholder="Preparation"
								rows={2}
								required
								onChange={handleChange}
								value={formData.preparation}
							/>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
