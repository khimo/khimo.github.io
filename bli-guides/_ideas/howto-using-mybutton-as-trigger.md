---
title: Trigger MyButton with External Button Press
description: Learn how to link a physical button from any integrated Home Automation system (e.g., KNX) to a B&O MyButton (Favourite) on your BeoLiving Intelligence RENDERER product. This guide uses standard macro commands, requiring no Lua scripting, and enables seamless control over your favorite content like Spotify playlists or radio stations.
keywords: BeoLiving Intelligence, MyButton, Favourite, external button, KNX, Home Automation, macro, RENDERER, _PRESET, automation, Spotify, Radio
layout: pagetoc
---

### Introduction

Have you ever wanted to trigger your favorite Bang & Olufsen "MyButton" (also known as a Favourite) directly from a physical button in your home, perhaps from a KNX keypad or another Home Automation system? This tutorial shows you how to achieve just that, without writing any Lua code. By linking an external button press to a specific MyButton on your BeoLiving Intelligence (BLI) RENDERER product, you can instantly launch content previously assigned to that MyButton, such as your preferred Spotify playlist, a specific internet radio station, or a curated music flow.

This automation is perfect for creating intuitive and seamless control experiences, allowing users to effortlessly activate their favorite audio experiences with a single physical touch.

### How to set it up

To set up a macro that triggers a MyButton selection from an external button press, follow these steps:

1.  Open the BeoLiving Intelligence admin panel in your web browser.
2.  Navigate to the **Macro** tab in the left-hand menu.
3.  Click the "**+**" sign next to the desired Area/Zone to create a new Macro. Give it a descriptive name (e.g., "KNX Button 1 - MyButton 1").
4.  Add an **Event** to define when the macro should trigger:
    *   Click the "**Add event**" button.
    *   In the event configuration, select the **Resource** event type.
    *   Choose the **System** (e.g., "KNX Gateway") that contains your physical button.
    *   Select the specific **Resource** (e.g., "Living Room Button 1") corresponding to your physical button.
    *   Choose the **Type** of event (e.g., "BUTTON").
    *   Select the specific **Event** (e.g., "PRESS").
5.  Add a **Command** to define the action that will be executed:
    *   Click the "**Add command**" button.
    *   In the command configuration, select the **Resource** command type.
    *   Choose your target **RENDERER** product (e.g., "Living Room/BeoSound Stage"). This is the B&O product that will execute the MyButton action.
    *   From the **Command** drop-down list, select `_PRESET`.
    *   A field for `PresetNumber` will appear. Enter the number corresponding to the MyButton you wish to trigger (e.g., `1` for MyButton 1, `2` for MyButton 2, etc.).
6.  **Test the macro:** Press the physical button (e.g., your KNX button) you configured in step 4. Your selected B&O RENDERER product should now activate the corresponding MyButton/Favourite, playing the associated content.

Your MyButton is now linked to your physical button!

