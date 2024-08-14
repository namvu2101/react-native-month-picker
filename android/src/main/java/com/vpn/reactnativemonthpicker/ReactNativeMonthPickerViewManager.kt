package com.vpn.reactnativemonthpicker

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.ReactNativeMonthPickerViewManagerInterface
import com.facebook.react.viewmanagers.ReactNativeMonthPickerViewManagerDelegate

@ReactModule(name = ReactNativeMonthPickerViewManager.NAME)
class ReactNativeMonthPickerViewManager : SimpleViewManager<ReactNativeMonthPickerView>(),
  ReactNativeMonthPickerViewManagerInterface<ReactNativeMonthPickerView> {
  private val mDelegate: ViewManagerDelegate<ReactNativeMonthPickerView>

  init {
    mDelegate = ReactNativeMonthPickerViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<ReactNativeMonthPickerView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): ReactNativeMonthPickerView {
    return ReactNativeMonthPickerView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: ReactNativeMonthPickerView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "ReactNativeMonthPickerView"
  }
}
