#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface ReactNativeMonthPickerViewManager : RCTViewManager
@end

@implementation ReactNativeMonthPickerViewManager

RCT_EXPORT_MODULE(ReactNativeMonthPickerView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
