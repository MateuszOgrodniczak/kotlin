package com.example.demo.app

import com.example.demo.app.Op.*
import javafx.fxml.FXML
import javafx.scene.control.Button
import javafx.scene.control.Label
import javafx.scene.input.KeyEvent
import javafx.scene.layout.VBox
import javafx.stage.Stage
import tornadofx.*

class CalculatorApp : App(Calculator::class) {
    override fun start(stage: Stage) {
        importStylesheet("/style.css")
        stage.isResizable = false
        super.start(stage)
    }
}

class Calculator : View() {
    override val root: VBox by fxml("/Calculator.fxml")
    override fun onDock() {
        root.requestFocus()
    }

    @FXML
    lateinit var display: Label
    private val displayValue: Double
        get() = when (display.text) {
            "" -> 0.0
            else -> display.text.toDouble()
        }

    var curried: MutableList<Op> = mutableListOf(Add(0.0))

    init {
        root.lookupAll(".button").forEach { button ->
            button.setOnMouseClicked {
                op((button as Button).text)
            }
        }
        root.addEventHandler(KeyEvent.KEY_RELEASED) { event ->
            run {
                when {
                    isShiftWithOperator(event, "=") -> op("+")
                    isShiftWithOperator(event, "8") -> op("*")
                    isShiftWithOperator(event, "6") -> op("^")
                    isShiftWithOperator(event, "5") -> op("%")
                    event.code.toString() == "ENTER" -> op("=")
                    else -> op(event.text)
                }
            }
        }

        display.text = "0.0"
    }

    private fun isShiftWithOperator(event: KeyEvent, operation: String) = event.isShiftDown && event.text == operation

    private fun op(text: String) {
        if (Regex("[0-9]").matches(text)) {
            if (!display.text.contains('.')) {
                display.text += text
            } else {
                val textSplittedAtDot = display.text.split('.')
                val integerValue = textSplittedAtDot[0]
                val decimalDigits = textSplittedAtDot[1]
                val displayTextIntegerValue: String

                displayTextIntegerValue = if (integerValue == "0") {
                    text
                } else {
                    integerValue + text
                }

                display.text = "$displayTextIntegerValue.$decimalDigits"
            }
        } else {
            when (text) {
                "+" -> opAction(Add(displayValue))
                "-" -> opAction(Subtract(displayValue))
                "*" -> opAction(Multiply(displayValue))
                "/" -> opAction(Divide(displayValue))
                "^" -> opAction(Power(displayValue))
                "sqrt" -> opAction(Sqrt(displayValue))
                "C" -> {
                    curried.clear(); op("=")
                }
                "%" -> {
                    opAction(Percentage(displayValue))
                }
                "=" -> calculateResult(curried)
                "+/-" -> opAction(Invert(displayValue))
            }
        }
    }

    private fun calculateResult(actions: MutableList<Op>) {
        val ordered = actions.sortedByDescending { a -> a.priority }
        var result = 0.0
        var tempDisplayValue = displayValue

        for (orderedAction in ordered) {
            if (orderedAction == actions.last()) {
                result = orderedAction.calc(tempDisplayValue)
                if (actions.size > 1) {
                    tempDisplayValue = result
                    actions.remove(orderedAction)
                }
            } else {
                val nextAction = actions[(actions.indexOf(orderedAction) + 1)]
                result = orderedAction.calc(nextAction.x)
                nextAction.x = result
                actions.remove(orderedAction)
            }
        }

        display.text = result.toString()
        curried.clear()
    }

    private fun opAction(action: Op) {
        curried.add(action)
        display.text = ""
    }
}

sealed class Op(var x: Double) {
    abstract fun calc(y: Double): Double
    abstract var priority: Int

    class Add(x: Double) : Op(x) {
        override var priority = 0
        override fun calc(y: Double): Double = x + y
    }

    class Subtract(x: Double) : Op(x) {
        override var priority = 0
        override fun calc(y: Double): Double = x - y
    }

    class Multiply(x: Double) : Op(x) {
        override var priority = 1
        override fun calc(y: Double): Double = x * y
    }

    class Divide(x: Double) : Op(x) {
        override var priority = 1
        override fun calc(y: Double): Double = x / y
    }

    class Power(x: Double) : Op(x) {
        override var priority = 2
        override fun calc(y: Double): Double = Math.pow(x, y)
    }

    class Sqrt(x: Double) : Op(x) {
        override var priority = 2
        override fun calc(y: Double): Double = Math.sqrt(x)
    }

    class Invert(x: Double) : Op(x) {
        override var priority = 2
        override fun calc(y: Double): Double = -1.0 * x
    }

    class Percentage(x: Double) : Op(x) {
        override var priority = 2
        override fun calc(y: Double): Double = x / 100
    }
}
