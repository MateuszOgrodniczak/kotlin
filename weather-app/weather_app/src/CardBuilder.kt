/*
 * Copyright (c) 2018 Razeware LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Notwithstanding the foregoing, you may not use, copy, modify, merge, publish,
 * distribute, sublicense, create a derivative work, and/or sell copies of the
 * Software in any work that is designed, intended, or marketed for pedagogical or
 * instructional purposes related to programming, coding, application development,
 * or information technology.  Permission for such use, copying, modification,
 * merger, publication, distribution, sublicensing, creation of derivative works,
 * or sale is expressly withheld.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.addClass

class CardBuilder {

    fun addInput(): Element {
        val containerElement = document.createElement("div") as HTMLDivElement
        val titleElement = document.createElement("div") as HTMLDivElement
        val addCityInputElement = document.createElement("input") as HTMLInputElement
        val addCityButtonElement = document.createElement("button") as HTMLButtonElement

        containerElement.addClass("card", "card-shadow", "card-input")
        titleElement.addClass("text-title")
        addCityInputElement.addClass("float-left")
        addCityButtonElement.addClass("view-details", "ripple", "float-right")

        titleElement.innerHTML = "Search for a city"
        addCityInputElement.placeholder = "Add new city"
        addCityInputElement.id = "addCityInput"
        addCityButtonElement.innerHTML = "Add"

        addCityButtonElement.addEventListener("click", {
            val cityStorePresenter = CityStorePresenter()
            val cityStorePage = CityStorePage(cityStorePresenter)
            cityStorePresenter.attach(cityStorePage)

            cityStorePresenter.loadCity(addCityInputElement.value)
        })

        containerElement.appendChild(titleElement)
        containerElement.appendChild(document.createElement("br") as HTMLBRElement)
        containerElement.appendChild(addCityInputElement)
        containerElement.appendChild(addCityButtonElement)
        return containerElement
    }

    fun build(city: City): Element {
        val containerElement = document.createElement("div") as HTMLDivElement
        val imageElement = document.createElement("img") as HTMLImageElement
        val cityElement = document.createElement("div") as HTMLDivElement
        val tempElement = document.createElement("div") as HTMLDivElement
        val perceptibleTempElement = document.createElement("div") as HTMLDivElement
        val minTempElement = document.createElement("div") as HTMLDivElement
        val maxTempElement = document.createElement("div") as HTMLDivElement
        val pressureElement = document.createElement("div") as HTMLDivElement
        val humidityElement = document.createElement("div") as HTMLDivElement
        val cloudsElement = document.createElement("div") as HTMLDivElement
        val windElement = document.createElement("div") as HTMLDivElement
        val infoButtonElement = document.createElement("button") as HTMLButtonElement

        // bind data
        bind(city = city,
                imageElement = imageElement,
                cityElement = cityElement,
                tempElement = tempElement,
                perceptibleTempElement = perceptibleTempElement,
                minTempElement = minTempElement,
                maxTempElement = maxTempElement,
                pressureElement = pressureElement,
                humidityElement = humidityElement,
                cloudsElement = cloudsElement,
                windElement = windElement,
                infoButtonElement = infoButtonElement)

        // apply styles
        applyStyle(containerElement,
                cityElement = cityElement,
                imageElement = imageElement,
                tempElement = tempElement,
                perceptibleTempElement = perceptibleTempElement,
                minTempElement = minTempElement,
                maxTempElement = maxTempElement,
                pressureElement = pressureElement,
                humidityElement = humidityElement,
                cloudsElement = cloudsElement,
                windElement = windElement,
                infoButtonElement = infoButtonElement)

        containerElement
                .appendChild(
                        cityElement,
                        imageElement,
                        tempElement,
                        perceptibleTempElement,
                        minTempElement,
                        maxTempElement,
                        pressureElement,
                        humidityElement,
                        cloudsElement,
                        windElement,
                        infoButtonElement
                )
        return containerElement
    }

    // Apply CSS Classes
    private fun applyStyle(containerElement: HTMLDivElement,
                           cityElement: HTMLDivElement,
                           imageElement: HTMLImageElement,
                           tempElement: HTMLDivElement,
                           perceptibleTempElement: HTMLDivElement,
                           minTempElement: HTMLDivElement,
                           maxTempElement: HTMLDivElement,
                           pressureElement: HTMLDivElement,
                           humidityElement: HTMLDivElement,
                           cloudsElement: HTMLDivElement,
                           windElement: HTMLDivElement,
                           infoButtonElement: HTMLButtonElement) {

        containerElement.addClass("card", "card-shadow")
        cityElement.addClass("text-title")
        imageElement.addClass("cover-image")
        tempElement.addClass("text-description")
        perceptibleTempElement.addClass("text-description")
        minTempElement.addClass("text-description", "hidden")
        maxTempElement.addClass("text-description", "hidden")
        pressureElement.addClass("text-description", "hidden")
        humidityElement.addClass("text-description", "hidden")
        cloudsElement.addClass("text-description", "hidden")
        windElement.addClass("text-description", "hidden")
        infoButtonElement.addClass("view-details", "ripple", "float-right")
    }

    // Bind data to the view
    private fun bind(city: City,
                     cityElement: HTMLDivElement,
                     imageElement: HTMLImageElement,
                     tempElement: HTMLDivElement,
                     perceptibleTempElement: HTMLDivElement,
                     minTempElement: HTMLDivElement,
                     maxTempElement: HTMLDivElement,
                     pressureElement: HTMLDivElement,
                     humidityElement: HTMLDivElement,
                     cloudsElement: HTMLDivElement,
                     windElement: HTMLDivElement,
                     infoButtonElement: HTMLButtonElement) {

        imageElement.src = "img/" + city.weather[0].icon + ".png"
        imageElement.title = city.weather[0].main

        var title = city.name
        if(city.sys != null) {
            title += ", " + city.sys.country
        }

        cityElement.innerHTML = title
        tempElement.innerHTML = "<strong>Temperature: </strong>" + city.main.temp + " &#8451;"
        perceptibleTempElement.innerHTML = "<strong>Perceptible temperature: </strong>" + city.main.feels_like + " &#8451;"
        minTempElement.innerHTML = "<strong>Minimal temperature: </strong>" + city.main.temp_min + " &#8451;"
        maxTempElement.innerHTML = "<strong>Maximal temperature: </strong>" + city.main.temp_max + " &#8451;"
        pressureElement.innerHTML = "<strong>Pressure: </strong>" + city.main.pressure + " hPa"
        humidityElement.innerHTML = "<strong>Humidity: </strong>" + city.main.humidity + "%"

        var cloudiness = city.clouds.all
        if(cloudiness !== undefined) {
            cloudiness += "%"
        } else {
            cloudiness = "N/A"
        }
        cloudsElement.innerHTML = "<strong>Cloudiness: </strong>$cloudiness"

        var windDegrees = city.wind.deg
        if(windDegrees !== undefined) {
            windDegrees += "&#176;"
        } else {
            windDegrees = "N/A"
        }
        windElement.innerHTML = "<strong>Wind: </strong>" + city.wind.speed + " m/s, " + windDegrees

        infoButtonElement.innerHTML = "show more"

        infoButtonElement.addEventListener("click", {
            if(infoButtonElement.innerHTML == "show more") {
                minTempElement.classList.remove("hidden")
                maxTempElement.classList.remove("hidden")
                pressureElement.classList.remove("hidden")
                humidityElement.classList.remove("hidden")
                cloudsElement.classList.remove("hidden")
                windElement.classList.remove("hidden")
                infoButtonElement.innerHTML = "hide"
            } else {
                minTempElement.classList.add("hidden")
                maxTempElement.classList.add("hidden")
                pressureElement.classList.add("hidden")
                humidityElement.classList.add("hidden")
                cloudsElement.classList.add("hidden")
                windElement.classList.add("hidden")
                infoButtonElement.innerHTML = "show more"
            }
        })
    }

    private fun Element.appendChild(vararg elements: Element) {
        elements.forEach {
            this.appendChild(it)
        }
    }
}
