package com.aleaguilera.outputswitcher

import android.content.Intent
import android.service.quicksettings.TileService

class OutputSwitcherTileService : TileService() {
    override fun onClick() {
        super.onClick()
        try {
            val intent = Intent("com.android.settings.panel.action.MEDIA_OUTPUT").apply {
                putExtra("com.android.settings.panel.extra.PACKAGE_NAME", packageName)
                flags = Intent.FLAG_ACTIVITY_NEW_TASK
            }
            // Collapses the panel and starts the activity
            startActivityAndCollapse(intent)
        } catch (e: Exception) {
            // Handle error
        }
    }
}
