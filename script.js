const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const descriptionError = document.getElementById("description-error");
const amountError = document.getElementById("amount-error");
const categoryError = document.getElementById("category-error");
const expenseList = document.getElementById("expense-list");
const emptyMessage = document.getElementById("empty-message");
const totalExpensesDisplay = document.getElementById("total-expenses");
const themeToggle = document.getElementById("theme-toggle");

let expenses = JSON.parse(
    localStorage.getItem("expenses") || "[]"
);

let totalExpenses = 0;

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function updateTotal() {
    totalExpenses = expenses.reduce(function (total, expense) {
        return total + expense.amount;
    }, 0);

    totalExpensesDisplay.innerText =
        "₦" + totalExpenses.toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}

function displayExpense(expense) {
    
    const expenseItem = document.createElement("div");
    expenseItem.className = "expense-item";

    const expenseDetails = document.createElement("div");
    expenseDetails.className = "expense-details";

    const descriptionText = document.createElement("p");
    descriptionText.innerText = expense.description;

    const categoryText = document.createElement("p");
    categoryText.innerText = "Category: " + expense.category;

    const amountText = document.createElement("p");
    amountText.className = "expense-amount";
    amountText.innerText = "₦" + expense.amount.toFixed(2);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.type = "button";

    expenseDetails.append(
        descriptionText,
        categoryText,
        amountText
    );

    expenseItem.appendChild(expenseDetails);
    expenseItem.appendChild(deleteButton);
    expenseList.appendChild(expenseItem);

    emptyMessage.style.display = "none";

    
    deleteButton.addEventListener("click", function () {
        expenses = expenses.filter(function (item) {
            return item !== expense;
        });

        saveExpenses();

        expenseItem.remove();
        updateTotal();

        if (expenseList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

}

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amountText = amountInput.value;
    const amount = Number(amountText);
    const category = categoryInput.value;

    descriptionError.innerText = "";
    amountError.innerText = "";
    categoryError.innerText = "";

    let hasError = false;

    if (description === "") {
        descriptionError.innerText = "Please enter a description.";
        hasError = true;
    }

    if (amountText === "") {
        amountError.innerText = "Please enter an amount.";
        hasError = true;
    } else if (!Number.isFinite(amount) || amount <= 0) {
        amountError.innerText = "Please enter an amount greater than zero.";
        hasError = true;
    }

    if (category === "") {
        categoryError.innerText = "Please select a category.";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    const expense = {
        description: description,
        amount: amount,
        category: category
    };

    expenses.push(expense);
    saveExpenses();

    displayExpense(expense);
    updateTotal();

    expenseForm.reset();
});

expenses.forEach(function (expense) {
    displayExpense(expense);
});

updateTotal();

if (expenses.length === 0) {
    emptyMessage.style.display = "block";
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerText = "Switch to Light Mode";
} else {
    themeToggle.innerText = "Switch to Dark Mode";
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerText = "Switch to Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerText = "Switch to Dark Mode";
    }
});
