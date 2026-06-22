/**
 * sys-info.js
 * A robust utility to collect and format system information.
 */

const os = require('os');
const process = require('process');

class SystemInfoCollector {
    /**
     * Safely retrieves specific environment variables.
     * @returns {Object} Selected environment variables
     */
    static getSelectedEnvVars() {
        const env = process.env;
        return {
            USER: env.USER || env.USERNAME || 'Not Defined',
            TERM: env.TERM || 'Not Defined',
            NODE_ENV: env.NODE_ENV || 'development',
            PATH_LENGTH: env.PATH ? env.PATH.length.toString() + ' characters' : 'Not Defined'
        };
    }

    /**
     * Main data collection method.
     * @returns {Object} Standardized response object containing system data or error details.
     */
    static collect() {
        try {
            // Gathering data with logical fallbacks for graceful error handling
            const sysInfo = {
                operatingSystem: {
                    type: os.type() || 'Unknown OS Type',
                    release: os.release() || 'Unknown Release',
                    platform: os.platform() || 'Unknown Platform'
                },
                hardware: {
                    cpuArchitecture: os.arch() || 'Unknown Architecture',
                    logicalCores: os.cpus() ? os.cpus().length : 'Unknown'
                },
                network: {
                    hostname: os.hostname() || 'Unknown Hostname'
                },
                runtime: {
                    nodeVersion: process.version || 'Unknown Version'
                },
                user: {
                    homeDirectory: os.homedir() || 'Unknown Directory'
                },
                environment: this.getSelectedEnvVars()
            };

            return { success: true, data: sysInfo };
        } catch (error) {
            // Catches edge cases where OS restrictions might block data access
            return { success: false, error: error.message };
        }
    }

    /**
     * Executes the collection and formats the output to the console.
     */
    static printInfo() {
        console.log("Initializing System Data Collection...\n");
        
        const result = this.collect();

        if (result.success) {
            console.log("=== System Information ===");
            console.log(JSON.stringify(result.data, null, 4));
            console.log("==========================");
        } else {
            console.error("[!] Critical failure during system data collection:");
            console.error(result.error);
        }
    }
}

// Execute the script
SystemInfoCollector.printInfo();