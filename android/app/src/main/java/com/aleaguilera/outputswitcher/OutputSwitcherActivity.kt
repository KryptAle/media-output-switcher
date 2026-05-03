package com.aleaguilera.outputswitcher

import android.app.Activity
import android.content.Intent
import android.os.Bundle

class OutputSwitcherActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        openOutputSwitcher()
        finish()
    }

    private fun openOutputSwitcher() {
        try {
            val intent = Intent("com.android.settings.panel.action.MEDIA_OUTPUT").apply {
                putExtra("com.android.settings.panel.extra.PACKAGE_NAME", packageName)
                flags = Intent.FLAG_ACTIVITY_NEW_TASK
            }
            startActivity(intent)
        } catch (e: Exception) {
            // Log or show error
        }
    }
}
