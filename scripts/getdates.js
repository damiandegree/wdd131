document.getElementById("lastModified").innerHTML = document.lastModified;

const lastModified = document.querySelector("#lastModified");
lastmodification.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "lastModified"
	}
).format(today)}</span>`;