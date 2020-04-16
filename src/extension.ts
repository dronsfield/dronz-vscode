import * as vscode from 'vscode'
import foo from 'file-structurer'

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'dronz.helloWorld',
    async (args) => {
      const { path } = args
      const output = foo({ path })
      vscode.window.showInformationMessage(JSON.stringify(output))
      const { mainFile } = output.paths

      const doc = await vscode.workspace.openTextDocument(mainFile)
      const editor = vscode.window.showTextDocument(doc)
      vscode.commands.executeCommand(
        'workbench.files.action.showActiveFileInExplorer'
      )
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
